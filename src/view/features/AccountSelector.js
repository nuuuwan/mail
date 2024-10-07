import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import { useDataContext } from "../../nonview/core/DataProvider";
import { useEventHandlerContext } from "../core/EventHandlerProvider";

function ListItemEmailAccount({ emailAccount }) {
  const data = useDataContext();
  const handlers = useEventHandlerContext();
  if (!data || !handlers) return null;
  const { activeEmailAccount } = data;
  const { setActiveEmailAccount } = handlers;

  return (
    <ListItemButton
      selected={activeEmailAccount.emailAddress === emailAccount.emailAddress}
      onClick={function () {
        setActiveEmailAccount(emailAccount);
      }}
    >
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText
        primary={emailAccount.emailAddress}
        secondary={emailAccount.description}
      />
    </ListItemButton>
  );
}

export default function AccountSelector() {
  const data = useDataContext();
  if (!data) return null;

  const { emailAccountList } = data;
  return (
    <List component="nav">
      {emailAccountList.map(function (emailAccount) {
        return (
          <ListItemEmailAccount
            key={emailAccount.emailAddress}
            emailAccount={emailAccount}
          />
        );
      })}
    </List>
  );
}
