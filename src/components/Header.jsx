import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Badge, Avatar, Stack, Typography } from '@mui/material';
import { Menu, Notifications, Person, KeyboardArrowDown } from '@mui/icons-material';
import usFlag from '../assets/us-flag@2x.png'

const AssetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.35396 2.5C2.8698 2.5 1.66666 3.70314 1.66666 5.1873V14.1667C1.66666 16.0076 3.15904 17.5 4.99999 17.5H15C16.8409 17.5 18.3333 16.0076 18.3333 14.1667V8.7963C18.3333 6.9557 16.8421 5.46296 15.0008 5.46296H12.408C12.3748 5.41405 12.3365 5.35183 12.2931 5.27427C12.1757 5.06429 12.0615 4.81759 11.9305 4.53459C11.8994 4.46744 11.8674 4.39822 11.8341 4.32699C11.6748 3.98558 11.4818 3.58459 11.2583 3.26646C11.0727 3.00239 10.6674 2.5 10.0115 2.5H4.35396ZM10.4064 5.2098C10.4443 5.29197 10.4837 5.37702 10.524 5.46296H3.33332V5.1873C3.33332 4.62362 3.79028 4.16667 4.35396 4.16667H9.85161C9.86398 4.18236 9.87829 4.20148 9.89452 4.22458C10.0217 4.40559 10.1586 4.67764 10.3239 5.03184C10.3505 5.08899 10.3781 5.14863 10.4064 5.2098ZM4.99999 15.8333C4.07951 15.8333 3.33332 15.0871 3.33332 14.1667V7.12963H12.0651C12.0673 7.12968 12.0695 7.12971 12.0717 7.12974C12.0812 7.12987 12.0908 7.12983 12.1003 7.12963H15.0008C15.9209 7.12963 16.6667 7.87547 16.6667 8.7963V9.16667H15C13.6193 9.16667 12.5 10.286 12.5 11.6667C12.5 13.0474 13.6193 14.1667 15 14.1667H16.6667C16.6667 15.0871 15.9205 15.8333 15 15.8333H4.99999ZM14.1667 11.6667C14.1667 11.2064 14.5398 10.8333 15 10.8333H16.6667V12.5H15C14.5398 12.5 14.1667 12.1269 14.1667 11.6667ZM9.79281 4.10269C9.79282 4.10227 9.79627 4.10471 9.80311 4.1113C9.79622 4.10641 9.7928 4.10312 9.79281 4.10269Z" fill="black" />
    </svg>
);

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.9121 1.98757C10.7644 1.18416 9.23675 1.18416 8.08902 1.98757L2.3577 5.99949C1.39219 6.67535 0.855336 7.81083 0.945728 8.98592L1.53324 16.6236C1.64405 18.0641 2.94922 19.1111 4.37943 18.9068L7.02078 18.5294C8.2524 18.3535 9.16722 17.2987 9.16722 16.0545V15C9.16722 14.5398 9.54032 14.1667 10.0006 14.1667C10.4608 14.1667 10.8339 14.5398 10.8339 15V16.0545C10.8339 17.2987 11.7487 18.3535 12.9803 18.5294L15.6217 18.9068C17.0519 19.1111 18.3571 18.0641 18.4679 16.6236L19.0554 8.98592C19.1458 7.81083 18.6089 6.67535 17.6434 5.99949L11.9121 1.98757ZM9.04479 3.35296C9.61865 2.95125 10.3825 2.95125 10.9563 3.35296L16.6876 7.36488C17.1704 7.70281 17.4388 8.27055 17.3936 8.85809L16.8061 16.4958C16.7692 16.976 16.3341 17.3249 15.8574 17.2568L13.216 16.8795C12.8055 16.8209 12.5006 16.4693 12.5006 16.0545V15C12.5006 13.6193 11.3813 12.5 10.0006 12.5C8.61985 12.5 7.50056 13.6193 7.50056 15V16.0545C7.50056 16.4693 7.19562 16.8209 6.78508 16.8795L4.14373 17.2568C3.667 17.3249 3.23194 16.976 3.195 16.4958L2.60749 8.85809C2.56229 8.27055 2.83072 7.70281 3.31347 7.36488L9.04479 3.35296Z" fill="#2E3A5C" />
    </svg>
);

const FAQIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10.1168 8.45418C10.352 8.27777 10.4084 7.94834 10.2453 7.7037C10.0514 7.41283 9.63984 7.37208 9.39264 7.61927L8.92258 8.08934C8.59714 8.41477 8.0695 8.41477 7.74407 8.08934C7.41863 7.7639 7.41863 7.23626 7.74407 6.91083L8.21413 6.44076C9.20502 5.44987 10.8547 5.61322 11.6321 6.7792C12.2858 7.75983 12.0596 9.08037 11.1168 9.78751L11.0763 9.81785C10.9233 9.93257 10.8333 10.1126 10.8333 10.3038L10.8333 10.4167C10.8333 10.877 10.4602 11.2501 9.99999 11.2501C9.53975 11.2501 9.16666 10.877 9.16666 10.4167L9.16666 10.3038C9.16666 9.58801 9.50367 8.91399 10.0763 8.48452L10.1168 8.45418Z" fill="black" />
        <path d="M9.16666 12.9167C9.16666 13.377 9.53975 13.7501 9.99999 13.7501C10.4602 13.7501 10.8333 13.377 10.8333 12.9167C10.8333 12.4565 10.4602 12.0834 9.99999 12.0834C9.53975 12.0834 9.16666 12.4565 9.16666 12.9167Z" fill="black" />
        <path fillRule="evenodd" clipRule="evenodd" d="M1.66666 10.0001C1.66666 5.39771 5.39762 1.66675 9.99999 1.66675C14.6024 1.66675 18.3333 5.39771 18.3333 10.0001C18.3333 14.6025 14.6024 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6025 1.66666 10.0001ZM9.99999 3.33341C6.31809 3.33341 3.33332 6.31818 3.33332 10.0001C3.33332 13.682 6.31809 16.6667 9.99999 16.6667C13.6819 16.6667 16.6667 13.682 16.6667 10.0001C16.6667 6.31818 13.6819 3.33341 9.99999 3.33341Z" fill="black" />
    </svg>
);

const Header = ({ leftText }) => {
    let leftIcon;

    switch (leftText) {
        case 'Assets':
            leftIcon = <AssetIcon />;
            break;
        case 'Home':
            leftIcon = <HomeIcon />;
            break;
        case 'FAQs':
            leftIcon = <FAQIcon />;
            break;
        default:
            // Default case if leftText doesn't match any condition
            leftIcon = null;
    }

    return (
        <AppBar position="static" elevation={1} style={{ backgroundColor: "#fff" }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Left side */}
                <Stack direction="row" spacing={2} alignItems="center">
                    <IconButton color="inherit">
                        {leftIcon}
                    </IconButton>
                    <Typography variant="h6" color="text.secondary">{leftText}</Typography>
                    <Typography variant="p" color="text.secondary">/</Typography>
                </Stack>

                {/* Right side */}
                <Stack direction="row" spacing={2} alignItems="center">
                    <IconButton color="inherit" >
                        <Button color="inherit" >
                            <img src={usFlag} alt="US Flag" style={{ width: '20px', height: '20px', borderRadius: '50%' }} />
                            <Typography variant="p" ml={1} color="text.secondary">Eng
                                <KeyboardArrowDown />
                            </Typography>
                        </Button>
                    </IconButton>

                    <IconButton color="text.secondary">
                        <Badge badgeContent={4} color="error">
                            <Notifications />
                        </Badge>
                    </IconButton>

                    <Avatar>
                        <Person />
                    </Avatar>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
