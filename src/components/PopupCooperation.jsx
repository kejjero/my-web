import {Box, Dialog, DialogTitle, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

function PopupCooperation({openPopupCooperation, setOpenPopupCooperation}) {
    return(
        <Dialog
            open={openPopupCooperation}
            onClose={() => setOpenPopupCooperation(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Box style={{width: '500px'}}>
                <DialogTitle>Сотрудничество</DialogTitle>
                <FormControl>
                    <Box style={{margin: '20px'}}>
                        <Box>
                            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Компания" />
                                <FormControlLabel value="male" control={<Radio />} label="Фриланс" />
                                <FormControlLabel value="other" control={<Radio />} label="Другое" />
                            </RadioGroup>
                        </Box>
                        <Box>

                        </Box>
                    </Box>
                </FormControl>
            </Box>
        </Dialog>
    )
}

export default PopupCooperation;