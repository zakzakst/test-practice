"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type ButtonProps = Omit<React.ComponentProps<typeof Button>, "variant"> & {
  isActive?: boolean;
};

const ButtonPaginationButton = ({ isActive, ...rest }: ButtonProps) => {
  return <Button variant={isActive ? "outline" : "ghost"} {...rest} />;
};

export type Props = {
  total?: number;
  perPage?: number;
  current?: number;
  onMovePage: (page: number) => void;
};

export const ButtonPagination = ({
  total,
  perPage,
  current,
  onMovePage,
}: Props) => {
  const isShowPrev = useMemo<boolean>(() => {
    return true;
  }, []);

  const isShowNext = useMemo<boolean>(() => {
    return true;
  }, []);

  const items = useMemo<{ page: number; isActive?: boolean }[]>(() => {
    return [
      {
        page: 1,
      },
      {
        page: 2,
        isActive: true,
      },
      {
        page: 3,
      },
    ];
  }, []);

  const handleClickButton = (to: number | "prev" | "next") => {
    if (!current) return;
    switch (to) {
      case "prev":
        onMovePage(current - 1);
        break;
      case "next":
        onMovePage(current + 1);
        break;
      default:
        onMovePage(to);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        {isShowPrev && (
          <PaginationItem>
            <ButtonPaginationButton onClick={() => handleClickButton("prev")}>
              <ChevronLeftIcon />
              <span className="hidden sm:block">Previous</span>
            </ButtonPaginationButton>
          </PaginationItem>
        )}
        {items.map((item) => (
          <PaginationItem>
            <ButtonPaginationButton
              isActive={item.isActive}
              onClick={() => handleClickButton(item.page)}
            >
              {item.page}
            </ButtonPaginationButton>
          </PaginationItem>
        ))}
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        {isShowNext && (
          <PaginationItem>
            <ButtonPaginationButton onClick={() => handleClickButton("next")}>
              <span className="hidden sm:block">Next</span>
              <ChevronRightIcon />
            </ButtonPaginationButton>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
