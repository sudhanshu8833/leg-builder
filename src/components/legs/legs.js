import React, { useContext } from 'react'
import {
    LegBox,
    BoldLabel,
    NumberInput,
    MultiSelect,
    LabelChildren,
    LabelToggleSelect,
    StrikeElementReturn,
    getStrikeParameterArray
} from '../utils'

import { LegContext } from '../../config'
import LegConstants from '../constants/leg_constants'

const Legs = () => {
  const { globalData, updateGlobalData } = useContext(LegContext)

  const opacity = 'opacity-40 cursor-not-allowed appearance-none'

  const handleChange = (key, value, strikeCriteria = null, index = null) => {
    updateGlobalData(key, value)
    if (strikeCriteria) {
      const strikeParameterArray = getStrikeParameterArray(value)
      updateGlobalData(`legs.${index}.StrikeParameter.value`, strikeParameterArray)
    }
  }

  const handleToggleSelectChange = (type, key, value) => {
    if (type === 'switch') {
      updateGlobalData(`${key}.active`, value)
    } else {
      updateGlobalData(`${key}.Type`, value)
    }
  }

  const handelRemoveCopy = (action, index) => {
    if (action === 'remove') {
      updateGlobalData(
        'legs',
        globalData.legs.filter((leg, i) => i !== index),
      )
    } else {
      updateGlobalData('legs', [
        ...globalData.legs,
        JSON.parse(JSON.stringify(globalData.legs[index])),
      ])
    }
  }

  return (
    <div>
      {globalData.legs.length > 0 ? (
        <div className='text-left pt-4 pl-5'>
          <BoldLabel text={`Legs`} />
        </div>
      ) : null}
      {globalData.legs.map((leg, index) => (
        <div key={index}>
          <LegBox number={index + 1} onChange={handelRemoveCopy}>
            <div className='flex flex-col gap-5 justify-center items-center px-4'>
              <div className='flex flex-wrap gap-10 justify-center items-center p-2'>
                <LabelChildren label='Lots'>
                  <NumberInput
                    initialValue={leg[LegConstants.LOTS]}
                    onChange={(value) => handleChange(`legs.${index}.${LegConstants.LOTS}`, value)}
                  />
                </LabelChildren>
                <LabelChildren label='Position'>
                  <MultiSelect
                    initialValue={leg[LegConstants.POSITION_TYPE]}
                    options={LegConstants.MULTI_POSITION_TYPE}
                    onChange={(value) =>
                      handleChange(`legs.${index}.${LegConstants.POSITION_TYPE}`, value)
                    }
                  />
                </LabelChildren>

                {leg[LegConstants.LEG_TYPE] === 'options' ? (
                  <>
                    <LabelChildren label='Option Type'>
                      <MultiSelect
                        initialValue={leg[LegConstants.INSTRUMENT_KIND]}
                        options={LegConstants.MULTI_OPTION_TYPE}
                        onChange={(value) =>
                          handleChange(`legs.${index}.${LegConstants.INSTRUMENT_KIND}`, value)
                        }
                      />
                    </LabelChildren>
                    <LabelChildren label='Expiry'>
                      <MultiSelect
                        initialValue={leg[LegConstants.EXPIRY_KIND]}
                        options={LegConstants.MULTI_EXPIRY_TYPE}
                        onChange={(value) =>
                          handleChange(`legs.${index}.${LegConstants.EXPIRY_KIND}`, value)
                        }
                      />
                    </LabelChildren>
                    <LabelChildren label='Select Strike Criteria'>
                      <MultiSelect
                        initialValue={leg[LegConstants.ENTRY_TYPE]}
                        options={LegConstants.MULTI_ENTRY_TYPE}
                        onChange={(value) =>
                          handleChange(
                            `legs.${index}.${LegConstants.ENTRY_TYPE}`,
                            value,
                            true,
                            index,
                          )
                        }
                      />
                    </LabelChildren>
                    <StrikeElementReturn
                      strikeCriteria={leg[LegConstants.ENTRY_TYPE]}
                      onChange={handleChange}
                      type={`legs.${index}`}
                      defaultValue={true}
                      legIndex={index}
                    />
                  </>
                ) : null}
              </div>
              <div className='flex flex-wrap gap-10 justify-center items-center p-2'>
                <LabelToggleSelect
                  initialValue={[
                    leg[LegConstants.LEG_TARGET].Type,
                    leg[LegConstants.LEG_TARGET].active,
                  ]}
                  background={leg[LegConstants.LEG_TARGET].active ? '' : opacity}
                  label='Target Profit'
                  options={LegConstants.MULTI_TP_TYPE}
                  onChange={(type, value) =>
                    handleToggleSelectChange(
                      type,
                      `legs.${index}.${LegConstants.LEG_TARGET}`,
                      value,
                    )
                  }
                >
                  <NumberInput
                    initialValue={leg[LegConstants.LEG_TARGET].value}
                    background={leg[LegConstants.LEG_TARGET].active ? '' : opacity}
                    onChange={(value) =>
                      handleChange(`legs.${index}.${LegConstants.LEG_TARGET}.value`, value)
                    }
                  />
                </LabelToggleSelect>
                <LabelToggleSelect
                  initialValue={[
                    leg[LegConstants.LEG_STOP_LOSS].Type,
                    leg[LegConstants.LEG_STOP_LOSS].active,
                  ]}
                  background={leg[LegConstants.LEG_STOP_LOSS].active ? '' : opacity}
                  label='Stop loss'
                  options={LegConstants.MULTI_SL_TYPE}
                  onChange={(type, value) =>
                    handleToggleSelectChange(
                      type,
                      `legs.${index}.${LegConstants.LEG_STOP_LOSS}`,
                      value,
                    )
                  }
                >
                  <NumberInput
                    initialValue={leg[LegConstants.LEG_STOP_LOSS].value}
                    background={leg[LegConstants.LEG_STOP_LOSS].active ? '' : opacity}
                    onChange={(value) =>
                      handleChange(`legs.${index}.${LegConstants.LEG_STOP_LOSS}.value`, value)
                    }
                  />
                </LabelToggleSelect>
                <LabelToggleSelect
                  initialValue={[
                    leg[LegConstants.LEG_TRAIL_SL].Type,
                    leg[LegConstants.LEG_TRAIL_SL].active,
                  ]}
                  background={leg[LegConstants.LEG_TRAIL_SL].active ? '' : opacity}
                  label='Trail SL'
                  options={LegConstants.MUTLI_TRAIL_TYPE}
                  onChange={(type, value) =>
                    handleToggleSelectChange(
                      type,
                      `legs.${index}.${LegConstants.LEG_TRAIL_SL}`,
                      value,
                    )
                  }
                >
                  <NumberInput
                    initialValue={leg[LegConstants.LEG_TRAIL_SL].value.InstrumentMove}
                    background={leg[LegConstants.LEG_TRAIL_SL].active ? '' : opacity}
                    onChange={(value) =>
                      handleChange(
                        `legs.${index}.${LegConstants.LEG_TRAIL_SL}.value.InstrumentMove`,
                        value,
                      )
                    }
                  />
                  <NumberInput
                    initialValue={leg[LegConstants.LEG_TRAIL_SL].value.StopLossMove}
                    background={leg[LegConstants.LEG_TRAIL_SL].active ? '' : opacity}
                    onChange={(value) =>
                      handleChange(
                        `legs.${index}.${LegConstants.LEG_TARGET}.value.StopLossMove`,
                        value,
                      )
                    }
                  />
                </LabelToggleSelect>
                <LabelToggleSelect
                  initialValue={[
                    leg[LegConstants.LEG_REENTRY_TP].Type,
                    leg[LegConstants.LEG_REENTRY_TP].active,
                  ]}
                  background={leg[LegConstants.LEG_REENTRY_TP].active ? '' : opacity}
                  label='Re-entry on Tgt'
                  options={LegConstants.MULTI_REENTRY_TYPE}
                  onChange={(type, value) =>
                    handleToggleSelectChange(
                      type,
                      `legs.${index}.${LegConstants.LEG_REENTRY_TP}`,
                      value,
                    )
                  }
                >
                  <NumberInput
                    initialValue={leg[LegConstants.LEG_REENTRY_TP].value}
                    background={leg[LegConstants.LEG_REENTRY_TP].active ? '' : opacity}
                    onChange={(value) =>
                      handleChange(`legs.${index}.${LegConstants.LEG_REENTRY_TP}.value`, value)
                    }
                  />
                </LabelToggleSelect>
                <LabelToggleSelect
                  initialValue={[
                    leg[LegConstants.LEG_REENTRY_SL].Type,
                    leg[LegConstants.LEG_REENTRY_SL].active,
                  ]}
                  background={leg[LegConstants.LEG_REENTRY_SL].active ? '' : opacity}
                  label='Re-entry on SL'
                  options={LegConstants.MULTI_REENTRY_TYPE}
                  onChange={(type, value) =>
                    handleToggleSelectChange(
                      type,
                      `legs.${index}.${LegConstants.LEG_REENTRY_SL}`,
                      value,
                    )
                  }
                >
                  <NumberInput
                    initialValue={leg[LegConstants.LEG_REENTRY_SL].value}
                    background={leg[LegConstants.LEG_REENTRY_SL].active ? '' : opacity}
                    onChange={(value) =>
                      handleChange(`legs.${index}.${LegConstants.LEG_REENTRY_SL}.value`, value)
                    }
                  />
                </LabelToggleSelect>
                <LabelToggleSelect
                  initialValue={[
                    leg[LegConstants.LEG_MOMENTUM].Type,
                    leg[LegConstants.LEG_MOMENTUM].active,
                  ]}
                  background={leg[LegConstants.LEG_MOMENTUM].active ? '' : opacity}
                  label='Simple Momentum'
                  options={LegConstants.MULTI_MOM_TYPE}
                  onChange={(type, value) =>
                    handleToggleSelectChange(
                      type,
                      `legs.${index}.${LegConstants.LEG_MOMENTUM}`,
                      value,
                    )
                  }
                >
                  <NumberInput
                    initialValue={leg[LegConstants.LEG_MOMENTUM].value}
                    background={leg[LegConstants.LEG_MOMENTUM].active ? '' : opacity}
                    onChange={(value) =>
                      handleChange(`legs.${index}.${LegConstants.LEG_MOMENTUM}.value`, value)
                    }
                  />
                </LabelToggleSelect>
              </div>
            </div>
          </LegBox>
        </div>
      ))}
    </div>
  )
}

export default Legs
