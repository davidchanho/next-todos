import { useAppContext } from "../../context";

export const useFilter = () => {
  const {
    state: { todos, filter },
  } = useAppContext();

  const handleFilterAll = () => {
    
  };
  const handleFilterActive = () => {
    
  };
  const handleFilterCompleted = () => {
    
  };

  return {
    todos,
    filter,
    handleFilterAll,
    handleFilterActive,
    handleFilterCompleted,
  };
};
