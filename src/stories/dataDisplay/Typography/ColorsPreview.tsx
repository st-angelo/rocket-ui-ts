// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import Typography from '../../../components/dataDisplay/Typography'

export const ColorsPreview: React.FunctionComponent = () => (
  <>
    <Typography color="initial" gutterBottom>
      Initial
    </Typography>
    <Typography color="error" gutterBottom>
      Error
    </Typography>
    <Typography color="primary" gutterBottom>
      Primary
    </Typography>
    <Typography color="secondary" gutterBottom>
      Secondary
    </Typography>
    <Typography color="textPrimary" gutterBottom>
      Text Primary
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      Text Secondary
    </Typography>
  </>
)
