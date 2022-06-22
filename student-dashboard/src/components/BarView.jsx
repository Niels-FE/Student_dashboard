import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryTheme, VictoryGroup } from 'victory';

export const BarView = ({ data }) => {

    return (
        <div className="col-span-4 row-start-1 row-end-4 w-full">
            <VictoryChart
                theme={VictoryTheme.material}
                domain={{ y: [0, 5.0], x: [1, 10] }}
            >
                <VictoryGroup horizontal
                    offset={5}
                    style={{ data: { width: 5 }, }}
                    colorScale={["#55aa00", "#2563eb"]}
                    animate={{
                        onLoad: { duration: 1000 }
                    }}
                >
                    <VictoryBar
                        data={data}
                        x="Project"
                        y={"Difficulty"}
                    />
                    <VictoryBar
                        data={data}
                        x="Project"
                        y={"Funfactor"}
                    />

                </VictoryGroup>
            </VictoryChart>

        </div >
    )
}

