import React from 'react';
import { AnalytictsProducts } from './AnalytictsProducts';
import { AnalysisUser } from './AnalytictsUsers';
import { AnalytictsOrders } from './AnalytictsOrders';

export const DataAnalytics = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px', marginTop: '-10px', color: 'green' }}>
        Data Analytics Overview
      </h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0px' }}>
        <div style={{ flex: 1 }}>
          <AnalytictsProducts />
        </div>
        <div style={{ flex: 1 }}>
          <AnalysisUser />
        </div>
        <div><AnalytictsOrders/></div>
      </div>
    </div>
  );
};
