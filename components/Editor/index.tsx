'use client'

import { FC } from 'react';
import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';

import ToolbarPlugin from './plugins/ToolbarPlugin';

const Editor: FC = () => {
  const initialConfig = {
    namespace: 'Blog editor',
    onError(error: Error) { throw error; },
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="editor-input"
                aria-placeholder="Enter the text here..."
                placeholder={
                  <div className="editor-placeholder">Enter the text here...</div>
                }
              />
              }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <AutoFocusPlugin />
          <HistoryPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}

export default Editor;
