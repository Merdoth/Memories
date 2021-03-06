import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
  media: {
    height: '40%',
    paddingTop: '70.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    objectFit: 'contain'
  },
  border: {
    border: 'solid'
  },
  fullHeightCard: {
    height: '100%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '15px',
    height: '100%',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white'
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white'
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px'
  },
  title: {
    padding: '0 16px'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 16px 8px 16px'
  },
  iconButtons: {
    color: "#910591"
  }
});