
import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductInquiry } from "../../lib/types/product";
import { Jewelry, JewelryInquiry } from "../../lib/types/jewelry";
import { Watch, WatchInquiry } from "../../lib/types/watch";
class WatchService {
    private readonly path: string;
    constructor() {
        this.path = serverApi;
    }
    public async getWatches(input: WatchInquiry): Promise<Watch[]> {
        try {
            let url = `${this.path}/watch/all?page=${input.page}&limit=${input.limit}&order=${input.order}`;
            if (input.watchGender) url += `&watchGender=${input.watchGender}`;
            if (input.search) url += `&search=${input.search}`;
            const result = await axios.get(url);
            console.log("getWatches", result);
            return result.data;
        } catch (err) {
            console.log("Error, Watches: ", err);
            throw err;
        }
    }

    public async getWatch(productId: string): Promise<Jewelry> {
        try {
            const url = `${this.path}/watch/all/${productId}`;
            const result = await axios.get(url, { withCredentials: true });

            return result.data;
        } catch (err) {
            console.log("Error, getWatch:", err);
            throw err;
        }
    }
}
export default WatchService;