import React, {Component} from "react";
import {GridList, GridTile} from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Zoomin from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class ImageRsults extends Component {
  state = {
    open: false,
    currentImage: "",
  };
  handleClose = () => {
    this.setState({open: false});
  };
  handleOpen = img => {
    this.setState({open: true, currentImage: img});
  };
  render() {
    let imageListContent;
    const imgs = this.props.images;
    if (imgs) {
      imageListContent = (
        <GridList>
          {imgs.map(img => (
            <GridTile
              key={img.id}
              title={img.tags}
              subtitle={
                <span style={{color: "rgb(0, 188, 212)"}}>
                  By <strong>{img.user}</strong>
                </span>
              }
              titleStyle={{color: "rgb(0, 188, 212)"}}
              actionIcon={
                <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                  <Zoomin color="white" />
                </IconButton>
              }
              rows={2}
            >
              <img src={img.largeImageURL} alt="" />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }
    const actions = [
      <FlatButton
        label="Close"
        primare
        onClick={this.handleClose}
        style={{backgroundColor: "rgb(0, 188, 212)", color: "white"}}
      />,
    ];

    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          model={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoDetectWindowHeight
        >
          <img src={this.state.currentImage} alt="" style={{width: "100%"}} />
        </Dialog>
      </div>
    );
  }
}
export default ImageRsults;
