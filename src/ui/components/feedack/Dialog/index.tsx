import { Dialog as DialogMui, DialogProps as DialogMuiProps, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material"
import { PropsWithChildren } from "react";

interface DialogProps extends DialogMuiProps {
  open: boolean;
  onClose: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
  title: string;
}

export default function Dialog({ open, onClose, onCancel, onConfirm, title, children, ...rest }: PropsWithChildren<DialogProps>) {
  return (
    <DialogMui open={open} onClose={onClose} {...rest}>
      <DialogTitle color="primary" fontSize="small" textAlign="center">
        {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        {onCancel && (
          <Button variant="outlined" onClick={onCancel} sx={{ py: 2, px: 3 }}>
            Cancelar
          </Button>
        )}
        <Button variant="contained" type="submit" onClick={onConfirm} fullWidth={onCancel == undefined}>
          Confirmar
        </Button>
      </DialogActions>
    </DialogMui>
  )
}
