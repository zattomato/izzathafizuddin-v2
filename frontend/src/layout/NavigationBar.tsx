import { Grid, Link } from "@mui/joy";
import logo_cropped from '../assets/izzathafizuddin-logo_small-black_cropped.png'


const NavigationBar = () => {

    return (
        <div style={{ marginTop: 40 , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                sx={{width: '80%', maxWidth: 600}}
            >
                <Grid
                    container
                    justifyContent="flex-start"
                    sx={{ marginRight: 2}}
                >
                    <Link
                        href="/"
                        underline="none"
                        sx={{ color: 'inherit', textDecoration: 'none', fontFamily: 'inherit', fontSize: 'inherit' }}
                    >
                        <img
                            src={logo_cropped}
                            width="25"
                            className="d-inline-block align-top"
                            alt="izzathafizuddin logo"
                        />
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default NavigationBar