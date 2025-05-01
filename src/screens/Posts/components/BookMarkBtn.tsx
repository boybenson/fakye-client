import { TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { BookmarkIcon } from "react-native-heroicons/outline";
import { BookmarkIcon as BookmarkIconSolid } from "react-native-heroicons/solid";
import useAuthStore from "../../../zustand/auth-store";
import useToggleBookmark from "../../../hooks/use-toggle-bookmark";
import useIsPostBookmarked from "../../../hooks/use-ispost-bookmarked";
import { Toast } from "../../../common/Core/Alerts";
import { useQueryClient } from "@tanstack/react-query";

type Iprops = {
  postId: number;
};

const BookmarkBtn = ({ postId }: Iprops) => {
  const user = useAuthStore((state) => state.user);
  const queryClient = useQueryClient();
  const { toggleBookmark, isPending, isSuccess, isError, error } =
    useToggleBookmark();

  const { isPostBookmarked } = useIsPostBookmarked({
    postId: Number(postId),
    userId: Number(user?.ID),
  });

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [actionStatus, setActionStatus] = useState<boolean | null>(null);

  useEffect(() => {
    if (isPostBookmarked !== undefined) {
      setIsBookmarked(isPostBookmarked);
    }
  }, [isPostBookmarked]);

  useEffect(() => {
    if (isSuccess && actionStatus !== null) {
      queryClient.invalidateQueries({
        queryKey: [
          "isPostBookmarked",
          {
            postId: Number(postId),
            userId: Number(user?.ID),
          },
        ],
      });

      queryClient.invalidateQueries({
        queryKey: ["bookmarks"],
      });

      Toast({
        type: "sucess",
        message: actionStatus ? "Bookmarked!" : "Removed from bookmarks!",
      });
      setActionStatus(null);
    }

    if (isError) {
      setIsBookmarked(!actionStatus);
      Toast({
        type: "error",
        message: error?.message || "Failed to update bookmark",
      });
    }
  }, [isSuccess, isError, actionStatus, postId, user?.ID, queryClient, error]);

  const handleClick = () => {
    if (!user) {
      Toast({
        type: "error",
        message: "You need to login to bookmark posts",
      });
      return;
    }

    const newStatus = !isBookmarked;

    setIsBookmarked(newStatus);
    setActionStatus(newStatus);

    queryClient.setQueryData(
      [
        "isPostBookmarked",
        { postId: Number(postId), userId: Number(user?.ID) },
      ],
      newStatus
    );

    toggleBookmark({
      postId: Number(postId),
      userId: Number(user?.ID),
    });
  };

  const renderIcon = () => {
    if (isPending) {
      return <ActivityIndicator size="small" color="#08A045" />;
    }
    return isBookmarked ? (
      <BookmarkIconSolid color="#08A045" />
    ) : (
      <BookmarkIcon color="#6B7280" />
    );
  };

  return (
    <TouchableOpacity
      disabled={isPending}
      onPress={handleClick}
      className="flex-row items-center space-x-1 ml-3"
      accessibilityLabel={isBookmarked ? "Remove bookmark" : "Add bookmark"}
      accessibilityRole="button"
    >
      {renderIcon()}
    </TouchableOpacity>
  );
};

export default React.memo(BookmarkBtn);
