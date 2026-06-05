#!/usr/bin/env python3
"""Serve the CaseGrid MVP from the repository root."""

from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import sys


HOST = "127.0.0.1"
PORT = 4173
ROOT = Path(__file__).resolve().parent


class CaseGridHandler(SimpleHTTPRequestHandler):
    def list_directory(self, path):
        self.send_error(404, "Directory listing disabled. Open / for CaseGrid.")
        return None


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else PORT
    handler = partial(CaseGridHandler, directory=str(ROOT))
    try:
        server = ThreadingHTTPServer((HOST, port), handler)
    except OSError as error:
        if error.errno == 48:
            print(f"Port {port} is already in use.")
            print("Stop the old server with Ctrl-C, or run: python3 serve.py 4174")
            raise SystemExit(1) from error
        raise
    print(f"CaseGrid MVP serving {ROOT}")
    print(f"Open http://{HOST}:{port}/")
    server.serve_forever()


if __name__ == "__main__":
    main()
