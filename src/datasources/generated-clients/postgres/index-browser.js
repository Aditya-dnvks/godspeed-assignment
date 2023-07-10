
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.2
 * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
 */
Prisma.prismaVersion = {
  client: "3.15.2",
  engine: "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.TransactionIsolationLevel = makeEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.OwnerScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  name: 'name'
});

exports.Prisma.RestaurantScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  name: 'name',
  since: 'since',
  isOpen: 'isOpen',
  opsStartTime: 'opsStartTime',
  opsEndTime: 'opsEndTime',
  ownerId: 'ownerId',
  slug: 'slug',
  description: 'description',
  location: 'location'
});

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.MenuItemsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  price: 'price',
  couponCode: 'couponCode',
  restaurantId: 'restaurantId'
});

exports.Prisma.OrderScalarFieldEnum = makeEnum({
  id: 'id',
  frmoRestaurant: 'frmoRestaurant',
  orderStatus: 'orderStatus',
  placedAt: 'placedAt',
  fulfilledAt: 'fulfilledAt'
});

exports.Prisma.OrderItemScalarFieldEnum = makeEnum({
  id: 'id',
  menuItemId: 'menuItemId',
  quantity: 'quantity',
  orderId: 'orderId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.NullsOrder = makeEnum({
  first: 'first',
  last: 'last'
});
exports.OrderStatus = makeEnum({
  INITIATED: 'INITIATED',
  NOT_INITIATED: 'NOT_INITIATED',
  WAITING_FOR_APPROVAL_FROM_RESTAURANT: 'WAITING_FOR_APPROVAL_FROM_RESTAURANT',
  WAITING_FOR_DELIVERY_PARTNER: 'WAITING_FOR_DELIVERY_PARTNER',
  PLACED: 'PLACED',
  PICKUP_BY_DELIVERY_PARTNER: 'PICKUP_BY_DELIVERY_PARTNER',
  DELIVERED: 'DELIVERED',
  READY_TO_PICKUP: 'READY_TO_PICKUP'
});

exports.Prisma.ModelName = makeEnum({
  Owner: 'Owner',
  Restaurant: 'Restaurant',
  Category: 'Category',
  MenuItems: 'MenuItems',
  Order: 'Order',
  OrderItem: 'OrderItem'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
