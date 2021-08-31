import React from 'react';

import CategoryBarChart from '../bar/CategoryBarChart';

export default function AverageChart({ data }) {
    return (
        <CategoryBarChart
            data={data}
            labelFontSize={14}
            chartHeight={10}
            barCategoryGap={0.5}
            yAxisFontSize={14}
            yAxisLine={{ stroke: 'transparent' }}
            yAxisPadding={{ left: 20 }}
            gridVertical={true}
        />
    );
}
