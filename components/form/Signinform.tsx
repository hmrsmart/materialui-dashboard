import { signIn } from "next-auth/client";
import { IconButton, Tooltip } from "@material-ui/core";
import { useRouter } from "next/router";

import AuthCard from "@components/AuthCard";
import { authFormStyles } from "@styles/Authform.style";
import authJson from "@json/auth.json";
import displayIcons from "@utils/displayIcons";

type providerType = {
    name: string;
    id: string;
};

export default function Signinform({ providers }) {
    const classes = authFormStyles();
    const router = useRouter();
    const callbackURL: any = router.query.callbackUrl;

    return (
        <AuthCard content={authJson.login}>
            <div className={classes.iconGroup}>
                {Object.values(providers).map((provider: providerType) => (
                    <Tooltip key={provider.name} title={provider.name}>
                        <IconButton
                            onClick={() =>
                                signIn(provider.id, {
                                    callbackUrl: callbackURL,
                                })
                            }
                        >
                            {displayIcons(provider.id)}
                        </IconButton>
                    </Tooltip>
                ))}
            </div>
        </AuthCard>
    );
}
