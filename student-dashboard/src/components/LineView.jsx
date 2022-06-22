import React from 'react';
import { VictoryLine, VictoryLabel, VictoryChart, VictoryGroup, VictoryTheme } from 'victory';

export const LineView = ({ data }) => {
    return (
        <div className="col-span-4 row-start-1 row-end-4 w-full">
            <VictoryChart
                theme={VictoryTheme.material}
                domain={{ y: [0, 5.0], x: [1, 5] }}
            >
                <VictoryGroup
                    offset={5}
                    style={{ data: { width: 5 }, parent: { border: 0 } }}
                    colorScale={["#55aa00", "#2563eb"]}
                    animate={{
                        onLoad: { duration: 1000 }
                    }}
                >
                    <VictoryLine
                        data={data}
                        x="Project"
                        y={"Difficulty"}
                        labels={"Project"}
                        style={{ labels: { fontSize: 100 }, ticklabels: { fontSize: 100 } }}
                        labelComponent={<VictoryLabel style={{ tickLabels: { fontSize: 50 } }} />}
                    />
                    <VictoryLine
                        data={data}
                        x="Project"
                        y={"Funfactor"}
                    />

                </VictoryGroup>
            </VictoryChart>


        </div >
    )
}