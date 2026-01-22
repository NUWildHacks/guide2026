import React, { PropsWithChildren } from 'react';

type CalloutType = 'info' | 'warning' | 'error' | 'note';

interface CalloutProps extends PropsWithChildren {
  type?: CalloutType;
  emoji?: string;
}

const emojiByType: Record<CalloutType, string> = {
  info: 'ℹ️',
  warning: '⚠️',
  error: '🚫',
  note: '📝',
};

export function Callout({ type = 'info', emoji, children }: CalloutProps) {
  const icon = emoji ?? emojiByType[type];

  return (
    <div className={`wh-callout wh-callout-${type}`} role="note">
      <span className="wh-callout-icon" aria-hidden="true">
        {icon}
      </span>
      <div className="wh-callout-content">{children}</div>
    </div>
  );
}
