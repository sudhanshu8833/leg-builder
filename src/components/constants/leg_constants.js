
export default class LegConstants {

    // General Constants
    static ACTIVE = "active";

    // Legs keys
    static POSITION_TYPE = "PositionType";
    static LOTS = "Lots";
    static INSTRUMENT_KIND = "InstrumentKind";
    static EXPIRY_KIND = "ExpiryKind";
    static ENTRY_TYPE = "EntryType";
    static STRIKE_PARAMETER = "StrikeParameter";
    static LEG_STOP_LOSS = "LegStopLoss";
    static LEG_TARGET = "LegTarget";
    static LEG_TRAIL_SL = "LegTrailSL";
    static LEG_MOMENTUM = "LegMomentum";
    static LEG_REENTRY_SL = "LegReentrySL";
    static LEG_REENTRY_TP = "LegReentryTP";
    static RANGE_BREAKOUT = "RangeBreakout";
    static LEG_TYPE = "LegType"; // OPTIONS / FUTURES / LAZY

    // Legs values
    static BUY = { value: "PositionType.Buy", label: "Buy"};
    static SELL = { value: "PositionType.Sell", label: "Sell"};

    static FUTURES = { value: "Futures", label: "Futures"};
    static OPTIONS = { value: "Options", label: "Options"};

    static CALL = { value: "LegType.CE", label: "Call"};
    static PUT = { value: "LegType.PE", label: "Put"};

    static WEEKLY = { value: "ExpiryType.Weekly", label: "Weekly"};
    static NEXT_WEEKLY = { value: "ExpiryType.NextWeekly", label: "Next Weekly"};
    static MONTHLY = { value: "ExpiryType.Monthly", label: "Monthly"};

    static SL_TYPE_PERCENT = { value: "LegTgtSLType.Percentage", label: "Percentage"};
    static SL_TYPE_POINTS = { value: "LegTgtSLType.Points", label: "Points"};
    static SL_TYPE_UNDERLYING_PERCENT = { value: "LegTgtSLType.UnderlyingPercentage", label: "Underlying Percentage"};
    static SL_TYPE_UNDERLYING_POINTS = { value: "LegTgtSLType.UnderlyingPoints", label: "Underlying Points"};

    static TP_TYPE_PERCENT = { value: "LegTgtTPType.Percentage", label: "Percentage"};
    static TP_TYPE_POINTS = { value: "LegTgtTPType.Points", label: "Points"};
    static TP_TYPE_UNDERLYING_PERCENT = { value: "LegTgtTPType.UnderlyingPercentage", label: "Underlying Percentage"};
    static TP_TYPE_UNDERLYING_POINTS = { value: "LegTgtTPType.UnderlyingPoints", label: "Underlying Points"};

    static MOM_TYPE_POINTS_UP = { value: "LegMomentumType.PointsUp", label: "Points Up"};
    static MOM_TYPE_POINTS_DOWN = { value: "LegMomentumType.PointsDown", label: "Points Down"};
    static MOM_TYPE_PERCENT_UP = { value: "LegMomentumType.PercentageUp", label: "Percentage Up"};
    static MOM_TYPE_PERCENT_DOWN = { value: "LegMomentumType.PercentageDown", label: "Percentage Down"};
    static MOM_TYPE_UNDERLYING_POINTS_UP = { value: "LegMomentumType.UnderlyingPointsUp", label: "Underlying Points Up"};
    static MOM_TYPE_UNDERLYING_POINTS_DOWN = { value: "LegMomentumType.UnderlyingPointsDown", label: "Underlying Points Down"};
    static MOM_TYPE_UNDERLYING_PERCENT_UP = { value: "LegMomentumType.UnderlyingPercentageUp", label: "Underlying Percentage Up"};
    static MOM_TYPE_UNDERLYING_PERCENT_DOWN = { value: "LegMomentumType.UnderlyingPercentageDown", label: "Underlying Percentage Down"};

    static REENTRY_TYPE_ASAP = { value: "ReentryType.ASAP", label: "ASAP"};
    static REENTRY_TYPE_REVERSE_ASAP = { value: "ReentryType.ASAPReverse", label: "ASAP Reverse"};
    static REENTRY_TYPE_MOMENTUM = { value: "ReentryType.Momentum", label: "Momentum"};
    static REENTRY_TYPE_MOMENTUM_REVERSE = { value: "ReentryType.MomentumReverse", label: "Momentum Reverse"};
    static REENTRY_TYPE_COST = { value: "ReentryType.Cost", label: "Cost"};
    static REENTRY_TYPE_COST_REVERSE = { value: "ReentryType.CostReverse", label: "Cost Reverse"};
    static REENTRY_TYPE_LAZYLEG = { value: "ReentryType.LazyLeg", label: "Lazy Leg"};

    static TRAIL_TYPE_POINTS = { value: "TrailStopLossType.Points", label: "Points"};
    static TRAIL_TYPE_PERCENT = { value: "TrailStopLossType.Percentage", label: "Percentage"};

    static RANGE_BREAKOUT_TYPE_INSTRUMENT = { value: "RangeBreakoutType.Instrument", label: "Instrument"};
    static RANGE_BREAKOUT_TYPE_UNDERLYING = { value: "RangeBreakoutType.Underlying", label: "Underlying"};

    static STRIKE_TYPE = { value: "EntryType.EntryByStrikeType", label: "Strike Type"};
    static CLOSEST_PREMIUM = { value: "EntryType.EntryByClosestPremium", label: "Closest Premium"};
    static PREMIUM_GREATER_THAN = { value: "EntryType.EntryByPremiumGreaterThan", label: "Premium >="};
    static PREMIUM_LESS_THAN = { value: "EntryType.EntryByPremiumLessThan", label: "Premium <="};
    static PREMIUM_RANGE = { value: "EntryType.EntryByPremiumRange", label: "Premium Range"};
    static STRADDLE_WIDTH = { value: "EntryType.EntryByStraddleWidth", label: "Straddle Width"};
    static PERCENT_OF_ATM = { value: "EntryType.EntryByPercentOfATM", label: "% of ATM"};
    static SYNTHETIC_FUTURE = { value: "EntryType.EntryBySyntheticFuture", label: "Synthetic Future"};
    static ATM_STRADDLE_PREMIUM_PER = { value: "EntryType.EntryByATMStraddlePremiumPer", label: "ATM Straddle Premium %"};

    static MULTI_ENTRY_TYPE = [
        LegConstants.STRIKE_TYPE,
        LegConstants.CLOSEST_PREMIUM,
        LegConstants.PREMIUM_GREATER_THAN,
        LegConstants.PREMIUM_LESS_THAN,
        LegConstants.PREMIUM_RANGE,
        LegConstants.STRADDLE_WIDTH,
        LegConstants.PERCENT_OF_ATM,
        LegConstants.SYNTHETIC_FUTURE
    ];

    static MULTI_SL_TYPE = [
        LegConstants.SL_TYPE_PERCENT,
        LegConstants.SL_TYPE_POINTS,
        LegConstants.SL_TYPE_UNDERLYING_PERCENT,
        LegConstants.SL_TYPE_UNDERLYING_POINTS
    ];

    static MULTI_TP_TYPE = [
        LegConstants.TP_TYPE_PERCENT,
        LegConstants.TP_TYPE_POINTS,
        LegConstants.TP_TYPE_UNDERLYING_PERCENT,
        LegConstants.TP_TYPE_UNDERLYING_POINTS
    ];

    static MULTI_MOM_TYPE = [
        LegConstants.MOM_TYPE_POINTS_UP,
        LegConstants.MOM_TYPE_POINTS_DOWN,
        LegConstants.MOM_TYPE_PERCENT_UP,
        LegConstants.MOM_TYPE_PERCENT_DOWN,
        LegConstants.MOM_TYPE_UNDERLYING_POINTS_UP,
        LegConstants.MOM_TYPE_UNDERLYING_POINTS_DOWN,
        LegConstants.MOM_TYPE_UNDERLYING_PERCENT_UP,
        LegConstants.MOM_TYPE_UNDERLYING_PERCENT_DOWN
    ];

    static MULTI_REENTRY_TYPE = [
        LegConstants.REENTRY_TYPE_ASAP,
        LegConstants.REENTRY_TYPE_REVERSE_ASAP,
        LegConstants.REENTRY_TYPE_MOMENTUM,
        LegConstants.REENTRY_TYPE_MOMENTUM_REVERSE,
        LegConstants.REENTRY_TYPE_COST,
        LegConstants.REENTRY_TYPE_COST_REVERSE,
        LegConstants.REENTRY_TYPE_LAZYLEG
    ];

    static MULTI_EXPIRY_TYPE = [
        LegConstants.WEEKLY,
        LegConstants.NEXT_WEEKLY,
        LegConstants.MONTHLY
    ];

    static MULTI_POSITION_TYPE = [
        LegConstants.BUY,
        LegConstants.SELL
    ];

    static MULTI_OPTION_TYPE = [
        LegConstants.CALL,
        LegConstants.PUT
    ];

    static MUTLI_TRAIL_TYPE = [
        LegConstants.TRAIL_TYPE_POINTS,
        LegConstants.TRAIL_TYPE_PERCENT
    ];

    static MULTI_RANGE_BREAKOUT_TYPE = [
        LegConstants.RANGE_BREAKOUT_TYPE_INSTRUMENT,
        LegConstants.RANGE_BREAKOUT_TYPE_UNDERLYING
    ];

    static DEFAULT_LEG_VALUES = {

        [LegConstants.LEG_STOP_LOSS]: {
            Type: LegConstants.SL_TYPE_PERCENT.value,  // Default Stop Loss Type
            value: 0,
            active: false
        },

        [LegConstants.LEG_TARGET]: {
            Type: LegConstants.TP_TYPE_PERCENT.value,  // Default Target Type
            value: 0,  // Default Target Value
            active: false
        },

        [LegConstants.LEG_TRAIL_SL]: {
            Type: LegConstants.TRAIL_TYPE_POINTS.value,  // Default to Points trail stop loss
            value: {
                InstrumentMove: 0,  // Default instrument move
                StopLossMove: 0  // Default stop loss move
            },
            active: false
        },

        [LegConstants.LEG_MOMENTUM]: {
            Type: LegConstants.MOM_TYPE_POINTS_UP.value,  // Default Momentum Type
            value: 0,  // Default Momentum value
            active: false
        },

        [LegConstants.LEG_REENTRY_SL]: {
            Type: LegConstants.REENTRY_TYPE_REVERSE_ASAP.value,  // Default Reentry Stop Loss Type
            value: 1,  // Default Reentry SL value
            active: false
        },

        [LegConstants.LEG_REENTRY_TP]: {
            Type: LegConstants.REENTRY_TYPE_REVERSE_ASAP.value,  // Default Reentry Target Type
            value: 1,  // Default Reentry TP value
            active: false
        },
    };

    static STRIKE_TYPE_VALUES = [
        ...Array.from({ length: 20 }, (_, i) => ({ value: `StrikeType.ITM${20 - i}`, label: `ITM${20 - i}` })),
        { value: 'StrikeType.ATM', label: 'ATM' },
        ...Array.from({ length: 20 }, (_, i) => ({ value: `StrikeType.OTM${i + 1}`, label: `OTM${i + 1}` }))
    ];;

    static OPERATOR_VALUES = [
        { value: "+", label: "+" },
        { value: "-", label: "-" }
    ];

}