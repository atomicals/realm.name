import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  onChangePath?: any;
  pathBase: string;
}

export function ChangeWalletInitSection({ pathBase, onChangePath }: Props) {
  let [isOpen, setIsOpen] = React.useState(false);
  return (
    <Wrapper className="pt-3">
      <Inner>
        <div>
          <AdvancedLabel onClick={() => setIsOpen(!isOpen)}>
            <i className="fa fa-gear"></i> Advanced
          </AdvancedLabel>
        </div>
      </Inner>

      <div>
        {isOpen && (
          <AdvancedSettings>
            <div className="input-group mt-3">
              <span className="input-group-text" id="realm-addon">
                Path
              </span>
              <input
                type="text"
                className="form-control"
                placeholder={'Enter a derivation path'}
                aria-label="realmname"
                aria-describedby="realm-addon"
                value={pathBase}
                onChange={onChangePath}
              />
            </div>
          </AdvancedSettings>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AdvancedLabel = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 0.9em;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const AdvancedSettings = styled.div``;
