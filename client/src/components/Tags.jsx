import { Box, Chip } from "@mui/material";
import useQuery from "../hooks/useQuery";
import { tagService } from "../services";

export default function Tags({options, setOptions, ...props}) {
    
    const {data, fetching} = useQuery(tagService.getTop, [])
    return (
        <Box {...props}>
            {data?.map((item, index) => <Chip key={index} sx={{marginRight: 1, marginBottom: 1}}
            label={item}
            component="a"
            variant="outlined"
            clickable
            onClick={(e) => setOptions({...options, kw: item})}
        />)}
        </Box>
    )
}