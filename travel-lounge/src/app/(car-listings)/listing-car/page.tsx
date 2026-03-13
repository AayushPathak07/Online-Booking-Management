import React, { FC } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";

export type ListingCarPageProps = Record<string, never>;

const ListingCarPage: FC<ListingCarPageProps> = () => {
  return (
    <div className="container ">
      <SectionGridFilterCard className="pb-24 lg:pb-28" />
    </div>
  );
};

export default ListingCarPage;
