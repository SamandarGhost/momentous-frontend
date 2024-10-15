import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { Box, Button, Container, InputBase, Menu, MenuItem, Stack, Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../css/watch.css";
import { setWatches } from "./slice";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { Product, ProductInquiry } from "../../lib/types/product";
import { retrieveWatches } from "./selector";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "../../app/services/JewelryService";
import { ProductCollection } from "../../lib/enums/product.enum";
import { serverApi } from "../../lib/config";
import { useHistory, useLocation } from "react-router-dom";
import { CartItem } from "../../lib/types/search";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Watch, WatchInquiry } from "../../lib/types/watch";
import { Direction, ProductGender } from "../../lib/types/common";
import WatchService from "../../app/services/WatchService";
import { WatchBrand, WatchFunc } from "../../lib/enums/watch.enum";
import { watch } from "fs";
/* Redux Slice and Selector */
const actionDispatch = (dispatch: Dispatch) => ({
    setWatches: (data: Watch[]) => dispatch(setWatches(data)),
});
const watchesRetriever = createSelector(retrieveWatches, (watches) => ({
    watches,
}));

interface ProductsProps {
    onAdd: (item: CartItem) => void;
}


export default function WatchPage(props: ProductsProps) {
    const { onAdd } = props;
    const { setWatches } = actionDispatch(useDispatch());
    const { watches } = useSelector(watchesRetriever);
    const [watchSearch, setWatchSearch] = useState<WatchInquiry>({
        page: 1,
        limit: 16,
        order: "createdAt",
        search: "",
    });
    const [searchText, setSearchText] = useState<string>("");

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [sortingOpen, setSortingOpen] = useState(false);
    const [filterSortName, setFilterSortName] = useState('New');

    const [anchorElWatch, setWatchFuncAnchorEl] = useState<null | HTMLElement>(null);
    const [sortingOpenWatch, setWatchFuncSortingOpen] = useState(false);
    const [watchSortName, setWatchSortName] = useState('All');

    useEffect(() => {
        const watch = new WatchService();

        watch.getWatches(watchSearch)
            .then((data) => setWatches(data))
            .catch((err) => console.log(err));
    }, [watchSearch]);

    useEffect(() => {
        if (searchText === "") {
            watchSearch.search = "";
            setWatchSearch({ ...watchSearch });
        }
    }, []);

    console.log("watchSearch:", watchSearch);

    const history = useHistory();

    //  Handler 
    const searchWatchBrandHandler = (watchBrand: WatchBrand) => {
        watchSearch.page = 1;
        watchSearch.limit = 16;
        watchSearch.watchBrand = watchBrand;
        setWatchSearch({ ...watchSearch });
    };

    const searchGenderHandler = (watchGender: ProductGender) => {
        watchSearch.page = 1;
        watchSearch.watchGender = watchGender;
        setWatchSearch({ ...watchSearch });
    };

    const searchWatchHandler = () => {
        watchSearch.search = searchText;
        setWatchSearch({ ...watchSearch });
    };

    const watchDetailHandler = (id: string) => {
        history.push(`/watch/all/${id}`);
    };

    const paginationHandler = (e: ChangeEvent<any>, value: number) => {
        watchSearch.page = value;
        setWatchSearch({ ...watchSearch });
    };

    const sortingClickHandler = (e: MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
        setSortingOpen(true);
    };

    const sortingCloseHandler = () => {
        setSortingOpen(false);
        setAnchorEl(null);
    };

    const sortingHandler = (e: React.MouseEvent<HTMLLIElement>) => {
        switch (e.currentTarget.id) {
            case 'new':
                watchSearch.page = 1;
                watchSearch.order = "createdAt"
                setWatchSearch({ ...watchSearch, order: 'createdAt' });
                setFilterSortName('New');
                break;
            case 'view':
                watchSearch.page = 1;
                watchSearch.order = "watchViews"
                setWatchSearch({ ...watchSearch, order: 'watchViews' });
                setFilterSortName('View');
                break;
            case 'price':
                watchSearch.page = 1;
                watchSearch.order = "watchPrice"
                setWatchSearch({ ...watchSearch, order: 'watchPrice' });
                setFilterSortName('Price');
                break;
        }
        setSortingOpen(false);
        setAnchorEl(null);
    };

    const sortingWatchFuncClickHandler = (e: MouseEvent<HTMLElement>) => {
        setWatchFuncAnchorEl(e.currentTarget);
        setWatchFuncSortingOpen(true);
    };

    const sortingWatchFuncCloseHandler = () => {
        setWatchFuncSortingOpen(false);
        setWatchFuncAnchorEl(null);
    };

    const sortingWatchFuncHandler = (e: React.MouseEvent<HTMLLIElement>) => {
        switch (e.currentTarget.id) {
            case 'all':
                window.location.reload();
                setWatchSortName('All');
                break;
            case 'analogue':
                watchSearch.page = 1;
                watchSearch.watchFunc = WatchFunc.ANALOGUE
                setWatchSearch({ ...watchSearch, watchFunc: WatchFunc.ANALOGUE });
                setWatchSortName('Analogue');
                break;
            case 'chronograph':
                watchSearch.page = 1;
                watchSearch.watchFunc = WatchFunc.CHRONOGRAPH
                setWatchSearch({ ...watchSearch, watchFunc: WatchFunc.CHRONOGRAPH });
                setWatchSortName('Chronograph');
                break;
            case 'digital':
                watchSearch.page = 1;
                watchSearch.watchFunc = WatchFunc.DIGITAL
                setWatchSearch({ ...watchSearch, watchFunc: WatchFunc.DIGITAL });
                setWatchSortName('Digital');
                break;
            case 'hybrid':
                watchSearch.page = 1;
                watchSearch.watchFunc = WatchFunc.HYBRID
                setWatchSearch({ ...watchSearch, watchFunc: WatchFunc.HYBRID });
                setWatchSortName('Hybrid');
                break;
        }
        setWatchFuncSortingOpen(false);
        setWatchFuncAnchorEl(null);
    };

    return (
        <div className={"watches"}>
            <Container className={'watch-cnt'}>
                <Stack className={'top'}>
                    <Stack className={'top-bar'}>
                        <Box className={'gender-btn'}>
                            <Button
                                variant={'outlined'}
                                className={'male-btn'}
                                color={watchSearch.watchGender === ProductGender.MAN ? "primary" : "secondary"}
                                onClick={() => searchGenderHandler(ProductGender.MAN)}>
                                Man
                            </Button>
                            <Button
                                variant={'outlined'}
                                className={'female-btn'}
                                color={watchSearch.watchGender === ProductGender.WOMAN ? "primary" : "secondary"}
                                onClick={() => searchGenderHandler(ProductGender.WOMAN)}
                            >
                                Woman
                            </Button>
                        </Box>
                        <Box className={'search'}>
                            <InputBase
                                type="text"
                                placeholder="Search..."
                                className={'search-input'}
                                onChange={(e) => {
                                    setSearchText(e.target.value);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") searchWatchHandler();
                                }}
                            />
                            <Button className={'search-btn'}>
                                Search
                                <SearchIcon className={'finder'} />
                            </Button>
                        </Box>
                        <Stack className={'sorting'}>
                            <Typography className={'sort-name'}>Sort:</Typography>
                            <Button className={'menu-btn'} onClick={sortingClickHandler} endIcon={<KeyboardArrowDownOutlinedIcon />}>
                                {filterSortName}
                            </Button>
                            <Menu anchorEl={anchorEl} open={sortingOpen} onClose={sortingCloseHandler} className={'menu'}>
                                <MenuItem
                                    onClick={sortingHandler}
                                    id={'new'}
                                    disableRipple
                                    className={'menu-item'} sx={{ fontFamily: "Roboto Serif", fontSize: "16px", fontWeight: "lighter", letterSpacing: "2px" }}>
                                    New
                                </MenuItem>
                                <MenuItem
                                    onClick={sortingHandler}
                                    id={'view'}
                                    disableRipple
                                    className={'menu-item'} sx={{ fontFamily: "Roboto Serif", fontSize: "16px", fontWeight: "lighter", letterSpacing: "2px" }}>
                                    View
                                </MenuItem>
                                <MenuItem
                                    onClick={sortingHandler}
                                    id={'price'}
                                    disableRipple
                                    className={'menu-item'} sx={{ fontFamily: "Roboto Serif", fontSize: "16px", fontWeight: "lighter", letterSpacing: "2px" }}>
                                    Price
                                </MenuItem>
                            </Menu>
                        </Stack>
                        <Stack className={'sorting-watch'}>
                            <Typography className={'sort-name'}>Category:</Typography>
                            <Button className={'menu-btn'} onClick={sortingWatchFuncClickHandler} endIcon={<KeyboardArrowDownOutlinedIcon />}>
                                {watchSortName}
                            </Button>
                            <Menu anchorEl={anchorElWatch} open={sortingOpenWatch} onClose={sortingWatchFuncCloseHandler} className={'menu'}>
                                <MenuItem
                                    onClick={sortingWatchFuncHandler}
                                    id={'all'}
                                    disableRipple
                                    className={'menu-item'} sx={{ fontFamily: "Roboto Serif", fontSize: "16px", fontWeight: "lighter", letterSpacing: "2px" }}>
                                    All
                                </MenuItem>
                                <MenuItem
                                    onClick={sortingWatchFuncHandler}
                                    id={'analogue'}
                                    disableRipple
                                    className={'menu-item'} sx={{ fontFamily: "Roboto Serif", fontSize: "16px", fontWeight: "lighter", letterSpacing: "2px" }}>
                                    Analogue
                                </MenuItem>
                                <MenuItem
                                    onClick={sortingWatchFuncHandler}
                                    id={'chronograph'}
                                    disableRipple
                                    className={'menu-item'} sx={{ fontFamily: "Roboto Serif", fontSize: "16px", fontWeight: "lighter", letterSpacing: "2px" }}>
                                    Chronograph
                                </MenuItem>
                                <MenuItem
                                    onClick={sortingWatchFuncHandler}
                                    id={'digital'}
                                    disableRipple
                                    className={'menu-item'} sx={{ fontFamily: "Roboto Serif", fontSize: "16px", fontWeight: "lighter", letterSpacing: "2px" }}>
                                    Digital
                                </MenuItem>
                                <MenuItem
                                    onClick={sortingWatchFuncHandler}
                                    id={'hybrid'}
                                    disableRipple
                                    className={'menu-item'} sx={{ fontFamily: "Roboto Serif", fontSize: "16px", fontWeight: "lighter", letterSpacing: "2px" }}>
                                    Hybrid
                                </MenuItem>
                            </Menu>
                        </Stack>
                    </Stack>
                    <Stack className={'filter'}>
                        <Typography className={'brands-name'}>Watch Brands</Typography>
                        <Box className={'brand-collection'}>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.page === 1 ? "primary" : "secondary"}
                                onClick={() => window.location.reload()}
                                className={'brand-btn'}>All</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.ROLEX ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.ROLEX)}
                                className={'brand-btn'}>Rolex</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.CARTIER ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.CARTIER)}
                                className={'brand-btn'}>Cartier</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.CASIO ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.CASIO)}
                                className={'brand-btn'}>Casio</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.OMEGA ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.OMEGA)}
                                className={'brand-btn'}>Omega</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.SEIKO ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.SEIKO)}
                                className={'brand-btn'}>Seiko</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.BVLGARI ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.BVLGARI)}
                                className={'brand-btn'}>Bvlgari</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.BOSS ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.BOSS)}
                                className={'brand-btn'}>Boss</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.VERSACE ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.VERSACE)}
                                className={'brand-btn'}>Versace</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.CHANEL ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.CHANEL)}
                                className={'brand-btn'}>Chanel</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.GUCCI ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.GUCCI)}
                                className={'brand-btn'}>Gucci</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.ARMANI ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.ARMANI)}
                                className={'brand-btn'}>Armani</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.HAMILTON ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.HAMILTON)}
                                className={'brand-btn'}>Hamilton</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.CITIZEN ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.CITIZEN)}
                                className={'brand-btn'}>Citizen</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.OLIVIA ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.OLIVIA)}
                                className={'brand-btn'}>Olivia</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.TIMEX ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.TIMEX)}
                                className={'brand-btn'}>Timex</Button>
                            <Button
                                variant={'outlined'}
                                color={watchSearch.watchBrand === WatchBrand.TISSOT ? "primary" : "secondary"}
                                onClick={() => searchWatchBrandHandler(WatchBrand.TISSOT)}
                                className={'brand-btn'}>Tissot</Button>
                        </Box>
                    </Stack>
                </Stack>
                <Stack className={'watch-frame'}>
                    {watches.length !== 0 ? (
                        watches.map((watch: Watch) => {
                            const imagePath = `${serverApi}/${watch.watchImages[0]}`;
                            return (
                                <Stack key={watch._id} className={'card'} onClick={() => watchDetailHandler(watch._id)}>
                                    <Stack className={'card-img'}>
                                        <img src={imagePath} className={'img'} alt="" />
                                    </Stack>
                                    <Box className={'buttons'}>
                                        <Box className={'sale-btns'}>
                                            <Button className={'buy'}>Buy Now
                                                <AttachMoneyOutlinedIcon className={'icons'} />
                                            </Button>
                                            <Button className={'add-to'}
                                                onClick={(e) => {
                                                    onAdd({
                                                        _id: watch._id,
                                                        quantity: 1,
                                                        name: watch.watchName,
                                                        price: watch.watchPrice,
                                                        image: watch.watchImages[0],
                                                    });
                                                    e.stopPropagation();
                                                }}>
                                                Add To
                                                <LocalMallOutlinedIcon className={'icons'} />
                                            </Button>
                                        </Box>
                                        <Box className={'view-btns'}>
                                            <Typography className={"views"}>{watch.watchViews}
                                                <VisibilityIcon
                                                    sx={{ fontSize: 22, marginLeft: "5px", color: watch.watchViews === 0 ? "black" : "gray", }}
                                                />
                                            </Typography>
                                            <Typography className={"views"}>{watch.watchLikes}
                                                <FavoriteOutlinedIcon className={'like'}
                                                    sx={{ fontSize: 22, marginLeft: "5px" }}
                                                />
                                            </Typography>
                                            <BookmarkBorderOutlinedIcon className={'book-mark'} />
                                        </Box>
                                    </Box>
                                    <Box className={'info-list'}>
                                        <Box className={'info'}>
                                            <Typography className={'watch-name'}>{watch.watchName}</Typography>
                                            <p className={'yes'}>
                                                <CheckIcon className={'star'} />
                                            </p>
                                        </Box>
                                        <Box className={'info'}>
                                            <Typography className={'watch'}>{watch.watchPrice}$</Typography>
                                            <p className={'yes'}>
                                                <CheckIcon className={'star'} />
                                            </p>
                                        </Box>
                                        <Box className={'info'}>
                                            <Typography className={'watch'}>{watch.watchFunc}</Typography>
                                            <p className={'yes'}>
                                                <CheckIcon className={'star'} />
                                            </p>
                                        </Box>
                                        <Box className={'info'}>
                                            <Typography className={'watch'}>{watch.watchGender}</Typography>
                                            <p className={'yes'}>
                                                <CheckIcon className={'star'} />
                                            </p>
                                        </Box>
                                    </Box>
                                </Stack>
                            );
                        })) : (<Box className={"no-data"}> No Watch List!!</Box>)}
                </Stack>

                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Stack className={"pagination-section"}>
                        <Pagination
                            count={watches.length !== 0 ? watchSearch.page + 1 : watchSearch.page}
                            page={watchSearch.page}
                            renderItem={(item) => (
                                <PaginationItem
                                    components={{
                                        previous: ArrowBackIcon,
                                        next: ArrowForwardIcon,
                                    }}
                                    {...item}
                                    color={"standard"}
                                />
                            )}
                            onChange={paginationHandler}
                        />
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}