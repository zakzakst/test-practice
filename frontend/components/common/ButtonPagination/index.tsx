"use client";

import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type ButtonPaginationButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  "variant"
> & {
  isActive?: boolean;
};

const ButtonPaginationButton = ({
  isActive,
  ...rest
}: ButtonPaginationButtonProps) => {
  return <Button variant={isActive ? "outline" : "ghost"} {...rest} />;
};

export const ButtonPagination = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <ButtonPaginationButton>
            <ChevronLeftIcon />
            <span className="hidden sm:block">Previous</span>
          </ButtonPaginationButton>
        </PaginationItem>
        <PaginationItem>
          <ButtonPaginationButton>1</ButtonPaginationButton>
        </PaginationItem>
        <PaginationItem>
          <ButtonPaginationButton isActive>2</ButtonPaginationButton>
        </PaginationItem>
        <PaginationItem>
          <ButtonPaginationButton>3</ButtonPaginationButton>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <ButtonPaginationButton>
            <span className="hidden sm:block">Next</span>
            <ChevronRightIcon />
          </ButtonPaginationButton>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
