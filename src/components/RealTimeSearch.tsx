import React from 'react';

export interface RealTimeSearchProps {
  
}

const RealTimeSearch: React.FC<RealTimeSearchProps> = ({}) => {
  return (
    <div className="RealTimeSearch">
      <input type="text" name="tag" />
    </div>
  );
}

export default RealTimeSearch;
