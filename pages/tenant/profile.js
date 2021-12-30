
import { Card, Container, Navbar } from "react-bootstrap"
import { BarChart2, CreditCard, Edit, Home, LogOut, User } from "react-feather"
import styles from './Home.module.css'

const ProfilePage = ({user}) => {
return (
<>
<Navbar className={styles.navbar}>
    <Container  className={styles.navbarContainer}>
        <Navbar.Brand className={styles.navbarContainerBrand}>
            <Home size={30} />
        </Navbar.Brand>
        <Navbar.Brand className={styles.navbarContainerBrand}>
            <User size={30} />
        </Navbar.Brand>
        <Navbar.Brand className={styles.navbarContainerBrand}>
            <BarChart2 size={30} />
        </Navbar.Brand>
        <Navbar.Brand className={styles.navbarContainerBrand}>
            <CreditCard size={30} />
        </Navbar.Brand>
        <Navbar.Brand className={styles.navbarContainerBrand}>
            <LogOut size={30} />
        </Navbar.Brand>
    </Container>
</Navbar>

<Card className={styles.Card}>
    <Card.Img  className={styles.CardImg} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
    <Card.Body className={styles.CardBody}>
        <Card.Title className={styles.CardTitle}>
            Hi Bot
        </Card.Title>
        <Card.Subtitle className={styles.CardSubtitle}>Welcome to your profile page</Card.Subtitle>
        <Card.Text>Email ID</Card.Text>
        <Card.Text>detail 1</Card.Text>
        <Card.Text>detail 2</Card.Text>
        <Card.Text>detail 3</Card.Text>
        <Card.Text>detail 4</Card.Text>
        
    </Card.Body>
    <Edit size={30} className={styles.Edit} />
</Card>

<hr className={styles.HR} />

<div className={styles.AllotedSites}>Alloted Sites</div>

</>
 )
}

export default ProfilePage