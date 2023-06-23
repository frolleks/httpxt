import http from "http";

export class HttpxtResponse extends http.ServerResponse {
  json(data: object) {
    this.setHeader("Content-Type", "application/json");
    this.end(JSON.stringify(data));
  }
}
