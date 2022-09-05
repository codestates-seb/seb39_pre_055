/* eslint-disable consistent-return */
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import {
  ArrowDownSVG,
  ArrowUpSVG,
  SCardBox,
  SContentsBox,
  STitleBox,
  STitleButton,
  STitleH3,
} from './style';

interface ExtraStyles {
  cardBox?: FlattenSimpleInterpolation;
  titleBox?: FlattenSimpleInterpolation;
  title?: FlattenSimpleInterpolation;
}

export interface GuidelineCardProps {
  title: string;
  isCollapsable: boolean;
  extraStyles?: ExtraStyles;
  children: ReactNode;
  polymorphic?: 'div' | 'li';
}

const Accordion = ({
  title,
  isCollapsable,
  extraStyles,
  children,
  polymorphic,
}: GuidelineCardProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const expand = useCallback((e: HTMLDivElement) => {
    const height = e.scrollHeight;

    e.style.height = `${height}px`;
    e.addEventListener('transitionend', function callee() {
      e.style.height = 'auto';
      e.removeEventListener('transitionend', callee);
    });
  }, []);

  const collapse = useCallback((e: HTMLDivElement) => {
    requestAnimationFrame(() => {
      const height = e.scrollHeight;
      e.style.height = `${height}px`;

      requestAnimationFrame(() => {
        e.style.height = '';
      });
    });
  }, []);

  useEffect(() => {
    const contentBox = contentRef.current;
    if (!contentBox) return;
    if (isCollapsed === null) return; // 초기값을 false로 두면 처음 마운트 시 요소가 펼쳐졌다 접히는 현상 발생

    if (isCollapsed) {
      expand(contentBox);
    } else {
      collapse(contentBox);
    }
  }, [isCollapsed, expand, collapse]);

  return (
    <SCardBox as={polymorphic} extraStyles={extraStyles?.cardBox}>
      <STitleBox extraStyles={extraStyles?.titleBox}>
        {isCollapsable ? (
          <>
            <STitleButton
              extraStyles={extraStyles?.title}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {title}
            </STitleButton>
            {isCollapsed ? <ArrowDownSVG /> : <ArrowUpSVG />}
          </>
        ) : (
          <STitleH3 extraStyles={extraStyles?.title}>{title}</STitleH3>
        )}
      </STitleBox>
      <SContentsBox isCollapsable={isCollapsable} ref={contentRef}>
        {children}
      </SContentsBox>
    </SCardBox>
  );
};

export default Accordion;
