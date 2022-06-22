import React from 'react';
import { VictoryLine, VictoryAxis, VictoryChart, VictoryGroup, VictoryTheme, VictoryLegend, VictoryLabel } from 'victory';

export const LineView = ({ data }) => {
    return (
        <div className="col-start-1 col-end-9 row-start-1 row-end-3 w-full">
            <VictoryChart
                height={500}
                width={1000}
                theme={VictoryTheme.material}
                domain={{ y: [0, 5], x: [0, 10] }}
                animate={{
                    duration: 1000,
                }}
            >
                <VictoryAxis dependentAxis
                    tickLabelComponent={(
                        <VictoryLabel
                            verticalAnchor="middle"
                            textAnchor="start"
                            x={15}
                        />
                    )}
                    style={{
                        tickLabels: {
                            fontSize: 15,
                        }
                    }}
                />
                <VictoryAxis
                    tickLabelComponent={(
                        <VictoryLabel
                            verticalAnchor="middle"
                            textAnchor="middle"
                        />
                    )}
                    style={{
                        tickLabels: {
                            fontSize: 15,
                        }
                    }}
                />
                <VictoryGroup
                    colorScale={["#55aa00", "#2563eb"]}
                    style={{ data: { width: 10 } }}
                    offset={10}
                >
                    <VictoryLine
                        data={data}
                        x="Project"
                        y={"Difficulty"}
                    />
                    <VictoryLine
                        data={data}
                        x="Project"
                        y={"Funfactor"}
                    />

                </VictoryGroup>
                <VictoryLegend
                    orientation="horizontal"
                    data={[
                        { name: "Difficulty", symbol: { fill: "#55aa00" } },
                        { name: "Funfactor", symbol: { fill: "#2563eb" } },
                    ]}
                    style={{ labels: { fontSize: 15 } }}
                    x={800}
                />
            </VictoryChart>
        </div >
    )
}