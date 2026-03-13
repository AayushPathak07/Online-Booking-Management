import React, { ReactNode, Suspense } from "react";
import ClientListingDetailLayout from "./ClientListingDetailLayout";

type ListingDetailLayoutProps = {
  children: ReactNode;
};

const ListingDetailLayout = ({ children }: ListingDetailLayoutProps) => {
  return (
    <Suspense fallback={<div />}>
      <ClientListingDetailLayout>{children}</ClientListingDetailLayout>
    </Suspense>
  );
};

export default ListingDetailLayout;
