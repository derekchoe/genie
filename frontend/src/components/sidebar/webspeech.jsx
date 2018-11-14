import React, { Component } from 'react';

export default class WebSpeech extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { stream: false };
    this.transcript = '';
  }

  handleSubmit(e) {
    e.preventDefault();
    let SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!this.state.stream) {
      this.setState({ stream: true });
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';
      this.recognition.maxAlternatives = 1;

      let p = document.getElementById('text-area');

      this.recognition.addEventListener('result', e => {
        let transcript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');

        transcript = transcript.charAt(0).toUpperCase() + transcript.slice(1);
        p.value = transcript;

        if (e.results[0].isFinal) {
          p.value += '. ';
        }
      });

      this.recognition.start();
      this.recognition.addEventListener('end', this.recognition.start);
    } else {
      this.setState({ stream: false });
      this.recognition.stop();
      this.recognition.removeEventListener('end', this.recognition.start);

      this.recognition = null;
      this.transcript = '';
    }
  }

  render() {
    let buttonContent = this.state.stream ? 'Stop' : 'Record';
    return (
      <div className="webspeech-box">
        <div
          className={` record-button ${buttonContent}`}
          onClick={this.handleSubmit}
        >
          <i class="fas fa-microphone" />
        </div>
      </div>
    );
  }
}
