import React from 'react';

import { Box, Typography, Container, Stack } from "@mui/material";
import Divider from '../../app/components/divider';
import { NavLink } from 'react-router-dom';

export default function CategoryJewelries() {
    return (<div className={"category"}>
        <Container className={'category-list'}>
            <Typography className={'main-text'}>Category Jewelries</Typography>
            <Stack className={'category-main'}>
                <Stack className={"category-1"}>
                    <Stack className={'card-view'}>
                    </Stack>
                    <Stack className={'text-category'}>
                        <Box className={'card-text'}>
                            <NavLink to={'/jewelery/category/bracelets'} className={'bracelets'}>Earings</NavLink>
                        </Box>
                    </Stack>
                </Stack>
                <Stack className={"category-1"}>
                    <Stack className={'card-view2'}>
                    </Stack>
                    <Stack className={'text-category'}>
                        <Box className={'card-text'}>
                            <NavLink to={'/jewelery/category/bracelets'} className={'bracelets'}>Necklaces</NavLink>
                        </Box>
                    </Stack>
                </Stack>
                <Stack className={"category-1"}>
                    <Stack className={'card-view3'}>
                    </Stack>
                    <Stack className={'text-category'}>
                        <Box className={'card-text'}>
                            <NavLink to={'/jewelery/category/bracelets'} className={'bracelets'}>Rings</NavLink>
                        </Box>
                    </Stack>
                </Stack>
                <Stack className={"category-1"}>
                    <Stack className={'card-view4'}>
                    </Stack>
                    <Stack className={'text-category'}>
                        <Box className={'card-text'}>
                            <NavLink to={'/jewelery/category/bracelets'} className={'bracelets'}>Bracelets</NavLink>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    </div>);
}