import { ActivityIndicator, TouchableOpacity } from "react-native";
import React from "react";
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

  const handleClick = () => {
    toggleBookmark({
      variables: {
        content: {
          postId,
          userId: user?.id ?? "",
        },
      },
      onCompleted: () => {
        return Toast({ type: "sucess", message: "Bookmarked succesful" });
      },
      onError: (err) => {
        return Toast({ type: "error", message: err?.message });
      },
    });
  };

  return isPostBookmarked ? (
    <TouchableOpacity
      onPress={() => handleClick()}
      disabled={loading}
      className="flex-row items-center space-x-1 ml-3"
    >
      {loading ? (
        <ActivityIndicator size={25} />
      ) : (
        <BookmarkIconSolid color={"#08A045"} />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={() => handleClick()}
      disabled={loading}
      className="flex-row items-center space-x-1 ml-3"
    >
      {loading ? (
        <ActivityIndicator size={25} />
      ) : (
        <BookmarkIcon color={"#6B7280"} />
      )}
    </TouchableOpacity>
  );
};

export default BookmarkBtn;
