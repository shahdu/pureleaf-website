import React from 'react';
import { AnalytictsProducts } from './AnalytictsProducts';
import { AnalysisUser } from './AnalytictsUsers';
import { AnalytictsOrders } from './AnalytictsOrders';

export const DataAnalytics = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#388E3C', fontWeight: 'bold' }}>
        Data Analytics Overview
      </h1>
      
      {/* Flexbox container for the components */}
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* Analytics Orders Section */}
        <div style={{ flex: '1 1 30%', backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#388E3C', textAlign: 'center' }}>Orders Analytics</h2>
          <AnalytictsOrders />
        </div>
        
        {/* Analytics Products Section */}
        <div style={{ flex: '1 1 30%', backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#388E3C', textAlign: 'center' }}>Products Analytics</h2>
          <AnalytictsProducts />
        </div>
        
        {/* User Analysis Section */}
        <div style={{ flex: '1 1 30%', backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#388E3C', textAlign: 'center' }}>User Analytics</h2>
          <AnalysisUser />
        </div>
        
      </div>
    </div>
  );
};
