
import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';

const StyledSVG = styled('svg')(({ theme }) => ({
    width: '100%',
    height: '100%',
}));

const BarGeometry = ({ barWidth, barHeight, barRadius, distanceBetweenBars }) => {
    const [leftBarX, setLeftBarX] = useState(50);
    const [topBarY, setTopBarY] = useState(50);
    const [rightBarX, setRightBarX] = useState(50 + barWidth + distanceBetweenBars);

    const leftBarRef = useRef(null);
    const rightBarRef = useRef(null);

    useEffect(() => {
        if (leftBarRef.current && rightBarRef.current) {
            leftBarRef.current.addEventListener('mousedown', startDrag);
            rightBarRef.current.addEventListener('mousedown', startDrag);

            return () => {
                leftBarRef.current.removeEventListener('mousedown', startDrag);
                rightBarRef.current.removeEventListener('mousedown', startDrag);
            };
        }
    }, [leftBarRef, rightBarRef]);

    const startDrag = (event) => {
        event.preventDefault();
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', endDrag);
    };

    const drag = (event) => {
        const deltaX = event.movementX;
        if (event.target === leftBarRef.current) {
            setLeftBarX((prevX) => prevX + deltaX);
        } else if (event.target === rightBarRef.current) {
            setRightBarX((prevX) => prevX + deltaX);
        }
    };

    const endDrag = () => {
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', endDrag);
    };

    const dimensionLine = (x1, y1, x2, y2) => {
        return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="red" strokeWidth="1" />;
    };

    const dimensionText = (x, y, text) => {
        return (
            <text x={x} y={y} textAnchor="middle" fontSize="12" fill="red">
                {text}
            </text>
        );
    };

    return (
        <Paper elevation={3} >
            <Box style={{height:"600px"}}>
            <StyledSVG>
                <rect x={leftBarX} y={topBarY} width={barWidth} height={barHeight} rx={barRadius} fill="grey" ref={leftBarRef} />
                <rect
                    x={rightBarX}
                    y={topBarY}
                    width={barWidth}
                    height={barHeight}
                    rx={barRadius}
                    fill="grey"
                    ref={rightBarRef}
                />
                <rect x="50" y="50" width="100" height="100" fill="#FFC107" />

              
                <line x1="50" y1="170" x2="150" y2="170" stroke="black" stroke-width="2" />

             
                <line x1="50" y1="170" x2="50" y2="180" stroke="black" stroke-width="2" />
                <line x1="150" y1="170" x2="150" y2="180" stroke="black" stroke-width="2" />

              
                <text x="100" y="190" text-anchor="middle">100</text>

                {/*  <circle cx={leftBarX + barWidth + distanceBetweenBars / 2 + barRadius} cy={svgHeight / 2} r={barRadius} />
                <circle cx={rightBarX - distanceBetweenBars / 2 - barRadius} cy={svgHeight / 2} r={barRadius} />
                {dimensionLine(leftBarX, topBarY - 20, leftBarX, bottomBarY + 20)}
                {dimensionText(leftBarX, svgHeight / 2, `${barHeight}px`)}
                {dimensionLine(rightBarX, topBarY - 20, rightBarX, bottomBarY + 20)}
                {dimensionText(rightBarX, svgHeight / 2, `${barHeight}px`)}
                {dimensionLine(leftBarX + 20, topBarY + barHeight / 2, leftBarX + barWidth + 20, topBarY + barHeight / 2)}
                {dimensionText(svgWidth / 2, topBarY - 30, `${distanceBetweenBars}px`)} */}
            </StyledSVG>
            </Box>
        </Paper>

    );
};

export default BarGeometry;