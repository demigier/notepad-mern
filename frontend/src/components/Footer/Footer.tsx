import '../Footer/footer.css'
import GitInfo from 'react-git-info/macro';

const gitInfo = GitInfo();

export const Footer = () => {
    return (
            <footer className="bg-dark text-center p-2" style={{ marginTop: '100px' }}>
                <p className="name text-white"> Demian Giercowski &copy; {gitInfo.commit.message}</p>
            </footer>
    )
}

export default Footer;