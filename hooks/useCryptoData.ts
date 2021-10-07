import { useQuery } from "react-query";
import axios from "axios";

export default function useCryptoData() {
    return useQuery("crpytoGraph", async () => {
        const { data } = await axios.get("/api/compare-coin");
        return data;
    });
}
