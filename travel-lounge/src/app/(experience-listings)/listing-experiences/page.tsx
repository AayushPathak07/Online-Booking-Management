import React, { FC } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";

export type ListingExperiencesPageProps = Record<string, never>;

const ListingExperiencesPage: FC<ListingExperiencesPageProps> = ({}) => {
  return (
    <div className="container relative">
      <SectionGridFilterCard className="pb-24 lg:pb-28" />
    </div>
  );
};

export default ListingExperiencesPage;
