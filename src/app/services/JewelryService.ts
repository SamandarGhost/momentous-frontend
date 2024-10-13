
import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductInquiry } from "../../lib/types/product";
import { Jewelry, JewelryInquiry } from "../../lib/types/jewelry";
class JewelryService {
    private readonly path: string;
    constructor() {
        this.path = serverApi;
    }
    public async getJewelries(input: JewelryInquiry): Promise<Jewelry[]> {
        try {
            let url = `${this.path}/jewelry/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;
            if (input.jewelryGender) url += `&jewelryGender=${input.jewelryGender}`;
            if (input.search) url += `&search=${input.search}`;
            const result = await axios.get(url);
            console.log("getJewelries", result);
            return result.data;
        } catch (err) {
            console.log("Error, Jewelries: ", err);
            throw err;
        }
    }

    public async getJewelry(productId: string): Promise<Jewelry> {
        try {
            const url = `${this.path}/jewelry/all/${productId}`;
            const result = await axios.get(url, { withCredentials: true });

            return result.data;
        } catch (err) {
            console.log("Error, getWatch:", err);
            throw err;
        }
    }
}
export default JewelryService;