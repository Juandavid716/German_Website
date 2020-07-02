import React, { Component } from "react";
import "../css/voice.css";
class VoiceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supported: true,
      lang: props.lang || "de-DE",
      text: "",
      autoPlay: false,
      isSpeeking: false,
    };
  }
  componentWillMount() {
    if ("speechSynthesis" in window) {
      this._speech = new SpeechSynthesisUtterance();
      this._speech.onend = () => this.setState({ isSpeeking: false });
    } else {
      this.setState({ supported: false });
    }
  }

  componentDidMount() {
    if (this.state.supported && this.state.autoPlay) {
      this.speak();
    }
  }

  speak = () => {
    this._speech.text = this.state.text;
    this._speech.lang = this.state.lang;
    this.setState({ isSpeeking: true });
    window.speechSynthesis.speak(this._speech);
  };

  stop = () => {
    window.speechSynthesis.cancel();
  };

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { text, isSpeeking } = this.state;
    return (
      <div class="voice-container container">
        <div class="voice-text row">
          <h1>Schreiben Sie einen Paragraph</h1>
          <div>
            <textarea
              value={text}
              onChange={this.handleTextChange}
              cols="70"
              rows="10"
              id="text-area"
            />
            <br />
            <button
              class="button gray"
              disabled={isSpeeking}
              onClick={this.speak}
            >
              Speak
            </button>
            <button
              class="button gray"
              disabled={!isSpeeking}
              onClick={this.stop}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VoiceComponent;
