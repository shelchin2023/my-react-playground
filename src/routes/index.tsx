import { createFileRoute } from "@tanstack/react-router";
import { IconArrowLeft } from "@tabler/icons-react";
import { ShowSnackBarDemo } from "@/components/ShowSnackBarDemo";
import { formatDistance } from "date-fns/formatDistance";
import dayjs from "dayjs";

export const Route = createFileRoute("/")({
  component: () => (
    <div>
      <IconArrowLeft /> <ShowSnackBarDemo />
      Hello /!
      {formatDistance(dayjs.unix(1681546176).toDate(), new Date(), {
        addSuffix: true,
      })}
    </div>
  ),
});
