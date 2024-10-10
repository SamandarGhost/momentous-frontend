import React from 'react';

import { Box, Typography, Container, Stack } from "@mui/material";
import Divider from '../../app/components/divider';
import { NavLink } from 'react-router-dom';

export default function CategoryWatch() {
    return (<div className={"category-watch"}>
        <Container className={'category-list'}>
            <Typography className={'main-text'}>Category Watch</Typography>
            <Stack className={'category-main'}>
                <Stack className={"category-1"}>
                    <Stack className={'card-view'}>
                    </Stack>
                    <Stack className={'text-category'}>
                        <Box className={'card-text'}>
                            <NavLink to={'/jewelery/category/bracelets'} className={'watch'}>Analogue</NavLink>
                        </Box>
                    </Stack>
                </Stack>
                <Stack className={"category-1"}>
                    <Stack className={'card-view2'}>
                    </Stack>
                    <Stack className={'text-category'}>
                        <Box className={'card-text'}>
                            <NavLink to={'/jewelery/category/bracelets'} className={'watch'}>Chronograph</NavLink>
                        </Box>
                    </Stack>
                </Stack>
                <Stack className={"category-1"}>
                    <Stack className={'card-view3'}>
                    </Stack>
                    <Stack className={'text-category'}>
                        <Box className={'card-text'}>
                            <NavLink to={'/jewelery/category/bracelets'} className={'watch'}>Digital</NavLink>
                        </Box>
                    </Stack>
                </Stack>
                <Stack className={"category-1"}>
                    <Stack className={'card-view4'}>
                    </Stack>
                    <Stack className={'text-category'}>
                        <Box className={'card-text'}>
                            <NavLink to={'/jewelery/category/bracelets'} className={'watch'}>Hybrid</NavLink>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    </div>);
}