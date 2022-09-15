import Stripe from './StripePage';
import {authRoles} from "../../auth";

const StripeConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    auth: authRoles.user,
    routes: [
        {
            path: '/stripe',
            element: <Stripe />,
        },
    ],
};

export default StripeConfig;
