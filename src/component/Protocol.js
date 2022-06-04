import React from 'react'

export const Protocol = () => {
  return (
    <>
    <div className="protocol">
        <div className="bg-square"></div>
        <Row className="protocol-row">
          <Col
            md={6}
            className="d-flex h-100 flex-column align-items-start justify-content-center"
          >
            <p className="heading">GOVERNANCE PROTOCOL</p>
            <p className="title-line">Governed by the community.</p>

            <p className="content text-secondary">
              The USDAO Protocol is managed by a global community of our token
              holders and delegates.
            </p>
            <Link to="/gov" className="btn btn-border-gradient">
              Learn More
            </Link>
          </Col>

          <Col md={6} className="protocolList">
            <div className="protocol-list">
              <div className="list-wrap">
                <img src={list} alt="list" className="list-icon" />
                <p className="token-title">DELEGATION</p>
                <p className="token-content">
                  DAOGOV token holders delegate their tokens voting power to a
                  wallet, either their own or one controlled by a third party.
                </p>
              </div>

              <div className="list-wrap">
                <img src={list} alt="list" className="list-icon" />
                <p className="token-title">PROPOSALS</p>
                <p className="token-content">
                  DAOGOV token holders can create proposals which are the passed
                  to the community for approval
                </p>
              </div>

              <div className="list-wrap">
                <img src={list} alt="list" className="list-icon" />
                <p className="token-title">VOTING</p>
                <p className="token-content">
                  Wallets with delegated DAOGOV power vote on proposals,
                  deciding whether to approve or reject, ensuring complete
                  decentralized decision making.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div></>
  )
}
