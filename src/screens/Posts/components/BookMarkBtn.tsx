import { TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { BookmarkIcon } from "react-native-heroicons/outline";
import { BookmarkIcon as BookmarkIconSolid } from "react-native-heroicons/solid";
import useAuthStore from "../../../zustand/auth-store";
import useToggleBookmark from "../../../hooks/use-toggle-bookmark";
import useIsPostBookmarked from "../../../hooks/use-ispost-bookmarked";
import { Toast } from "../../../common/Core/Alerts";

type Iprops = {
  postId: string;
};

const BookmarkBtn = ({ postId }: Iprops) => {
  const user = useAuthStore((state) => state.user);
  const { toggleBookmark, loading } = useToggleBookmark();
  const { isPostBookmarked } = useIsPostBookmarked({
    filter: {
      postId,
      userId: user?.id,
    },
  });

  const [isBookmarked, setIsBookmarked] = useState(isPostBookmarked);

  useEffect(() => {
    setIsBookmarked(isPostBookmarked);
  }, [isPostBookmarked]);

  const handleClick = () => {
    const newStatus = !isBookmarked;
    setIsBookmarked(newStatus);

    toggleBookmark({
      variables: {
        content: {
          postId,
          userId: user?.id ?? "",
        },
      },
      onCompleted: () => {
        Toast({
          type: "sucess",
          message: newStatus ? "Bookmarked!" : "Removed from bookmarks!",
        });
      },
      onError: (err) => {
        setIsBookmarked(!newStatus);
        Toast({ type: "error", message: err?.message });
      },
    });
  };

  return (
    <TouchableOpacity
      disabled={loading}
      onPress={handleClick}
      className="flex-row items-center space-x-1 ml-3"
    >
      {isBookmarked ? (
        <BookmarkIconSolid color={"#08A045"} />
      ) : (
        <BookmarkIcon color={"#6B7280"} />
      )}
    </TouchableOpacity>
  );
};

export default BookmarkBtn;
