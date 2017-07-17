import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Column, Line } from '../UI/Grid';
import optionalRequire from '../Utils/OptionalRequire';
const electron = optionalRequire('electron');
const shell = electron ? electron.shell : null;
const app = electron ? electron.remote.app : null;
const gd = global.gd;

const styles = {
  content: { padding: 24 },
};

export default class AboutDialog extends Component {
  constructor() {
    super();
    this.gdVersionString = gd ? gd.VersionWrapper.fullString() : 'Unknown';
    this.appVersionString = app ? app.getVersion() : 'Unknown';
  }

  _onOpenWebsite() {
    shell.openExternal('http://compilgames.net');
  }

  render() {
    const { open, onClose } = this.props;
    const actions = [
      <FlatButton
        label="GDevelop Website"
        primary={false}
        onTouchTap={this._onOpenWebsite}
      />,
      <FlatButton label="Close" primary={false} onTouchTap={onClose} />,
    ];

    return (
      <Dialog
        actions={actions}
        modal={true}
        open={open}
        contentStyle={{
          maxWidth: 535,
        }}
        bodyStyle={{
          padding: 0,
        }}
      >
        <Column noMargin>
          <img
            src="res/GD-logo.png"
            alt="GDevelop logo"
            width="535"
            height="283"
          />
          <div style={styles.content}>
            <Line>
              GDevelop {this.appVersionString} based on GDevelop.js {this.gdVersionString}
            </Line>
          </div>
        </Column>
      </Dialog>
    );
  }
}
