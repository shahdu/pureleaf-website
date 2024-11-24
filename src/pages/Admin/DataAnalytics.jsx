import React from 'react';
import { AnalytictsProducts } from './AnalytictsProducts';
import { AnalysisUser } from './AnalytictsUsers';
import { AnalytictsOrders } from './AnalytictsOrders';

export const DataAnalytics = () => {
  return (
    <div style={{ padding: '20px'}}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#388E3C', fontWeight: 'bold' }}>
        Data Analytics Overview
      </h1>
      
      {/* Flexbox container for the components */}
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* Analytics Orders Section */}
        <div style={{ flex: '1 1 30%', backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <AnalytictsOrders />
        </div>
        
        {/* Analytics Products Section */}
        <div style={{ flex: '1 1 30%', backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <AnalytictsProducts />
        </div>
        
        {/* User Analysis Section */}
        <div style={{ flex: '1 1 30%', backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <AnalysisUser />
        </div>
        
      </div>
    </div>
  );
};
