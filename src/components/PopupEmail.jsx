import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,

} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import {useSnackbar} from "notistack";
import CopyAllIcon from '@mui/icons-material/CopyAll';

function PopupEmail({openPopupEmail, setOpenPopupEmail, successCopyEmail, setSuccessCopyEmail}) {
    const {enqueueSnackbar} = useSnackbar();

    const copyWriteText = () => {
        navigator.clipboard.writeText('kejeroarts@yandex.ru')
    }

    const handleClickVariant = (variant) => async () => {
        enqueueSnackbar('Почта добавлена в буффер обмена.', {variant});
        await copyWriteText()
        setSuccessCopyEmail(true)
        setTimeout(() => {
            setOpenPopupEmail(false)
        }, 700)
    };


    return (
        <Dialog
            open={openPopupEmail}
            onClose={() => setOpenPopupEmail(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>Контакты</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Вы желаете связаться со мной для коммерческого предложения или совместно работать над проектами?
                    Отправьте, пожалуйста, письмо на указанную почту, и я отвечу в ближайшее время, спасибо!
                </DialogContentText>
                <Button
                    size={"small"}
                    style={{width: '180px', marginTop: '20px'}}
                    variant="outlined"
                    color={successCopyEmail ? "success" : "primary"}
                    startIcon={successCopyEmail ? <CheckIcon/> : <CopyAllIcon/>}
                    onClick={handleClickVariant('success')}
                >
                    Копировать email
                </Button>
            </DialogContent>
        </Dialog>
    )
}

export default PopupEmail;