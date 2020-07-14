import React, { memo } from "react";
import LoadingWrapper from "./style";

const Loading = memo(({ children, loading }) => (
  <LoadingWrapper>
    {loading && (
      <div className="loading-fade">
        <div className="loader" />
      </div>
    )}
    <React.Fragment>{children}</React.Fragment>
  </LoadingWrapper>
));

export default Loading;
