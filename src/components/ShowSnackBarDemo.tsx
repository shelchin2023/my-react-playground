import { useSnackbar } from "notistack";

export const ShowSnackBarDemo = () => {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <button type="button" onClick={() => enqueueSnackbar("I love hooks")}>
      Show snackbar
    </button>
  );
};
